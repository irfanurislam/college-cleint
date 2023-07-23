import React from "react";

const ResearchPaper = () => {
  const researchPapers = [
    {
      title: "The Impact of Climate Change on Biodiversity",
      authors: "John Smith, Jane Doe",
      link: "https://www.ssrn.com/index.cfm/en/",
    },
    {
      title: "Machine Learning Techniques for Natural Language Processing",
      authors: "Emily Johnson, Michael Brown",
      link: "https://www.example.com/paper2",
    },
    {
      title: "Advancements in Quantum Computing",
      authors: "Robert Williams, Sarah Lee",
      link: "https://www.scienceopen.com/",
    },
  ];
  return (
    <div className="mt-28">
      <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Recommended Research Papers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {researchPapers.map((paper, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
              <p className="text-gray-600 mb-2">Authors: {paper.authors}</p>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Read Paper
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default ResearchPaper;
