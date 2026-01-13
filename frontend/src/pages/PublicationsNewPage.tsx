import React from 'react';

const PublicationsNewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-caser-navy mb-8 text-center">Publications</h1>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-caser-gold text-white">
                  <th className="py-3 px-4 text-left font-semibold">No.</th>
                  <th className="py-3 px-4 text-left font-semibold">Category</th>
                  <th className="py-3 px-4 text-left font-semibold">Research Title</th>
                  <th className="py-3 px-4 text-left font-semibold">Author</th>
                  <th className="py-3 px-4 text-left font-semibold">Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-4">1</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-caser-gold text-white rounded-full text-sm font-medium">
                      Environment
                    </span>
                  </td>
                  <td className="py-4 px-4 font-medium">Climate Change Detection in Pakistan Using Multistage Satellite Data</td>
                  <td className="py-4 px-4">Ayaz Haider Naqvi</td>
                  <td className="py-4 px-4">2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationsNewPage;