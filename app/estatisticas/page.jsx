'use client'
// pages/Charts.js
import React, { useEffect, useState } from "react";
import AlbumChart from "@/components/AlbumChart";

async function getAlbums() {
  try {
    const response = await fetch("http://localhost:3004/albuns");
    const dados = await response.json();
    return dados;
  } catch (error) {
    console.error("Erro ao obter dados do banco:", error);
    throw error; 
  }
}

const Charts = () => {
  const [albums, setAlbums] = useState([]);
  console.log(albums)
  useEffect(() => {
    async function formatarDadosParaGrafico() {
      const dadosDoBanco = await getAlbums();
      const dadosFormatados = [['Álbum', 'Preço']];

      dadosDoBanco.forEach(album => {
        dadosFormatados.push([album.titulo, parseFloat(album.preco)]);
      });

      setAlbums(dadosFormatados);
    }

    formatarDadosParaGrafico();
  }, []); // Certifique-se de que a dependência está vazia para executar apenas uma vez

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Gráfico de Preços</h2>
      <AlbumChart data={albums} />
    </div>
  );
};

export default Charts;
