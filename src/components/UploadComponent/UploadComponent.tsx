import { useState } from "react";


const GITHUB_REPO = "https://api.github.com/repos/andremadu/devscopeui/contents/components/";
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const UploadComponent = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!file) return;

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = async () => {
      const content = btoa(reader.result as string); // Converte para Base64

      const response = await fetch(GITHUB_REPO + file.name, {
        method: "PUT",
        headers: {
          "Authorization": `token ${GITHUB_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: `Adicionando ${file.name}`,
          content
        })
      });

      const result = await response.json(); // Captura a resposta do GitHub
      console.log("GitHub API Response:", result); // Mostra a resposta na consola
      
      if (response.ok) {
        alert("Componente enviado para o GitHub!");
      } else {
        alert("Erro ao enviar componente: " + JSON.stringify(result)); // Exibe o erro real
      }
    };
  };

  return (
    <div>
      <h2>Fazer Upload de Componentes</h2>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload}>Enviar</button>
    </div>
  );
};

export default UploadComponent;
