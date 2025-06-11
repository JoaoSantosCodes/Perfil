import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { Message } from '../../types';

export const AdminMessages = () => {
  const { getMessages, deleteMessage } = useApi();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const data = await getMessages();
      setMessages(data);
    } catch (error) {
      console.error('Erro ao carregar mensagens:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir esta mensagem?')) {
      try {
        await deleteMessage(id);
        fetchMessages();
      } catch (error) {
        console.error('Erro ao excluir mensagem:', error);
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Mensagens Recebidas</h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nome
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mensagem
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Data
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {messages.map((message) => (
              <tr key={message.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {message.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    <a
                      href={`mailto:${message.email}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {message.email}
                    </a>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500 max-w-md truncate">
                    {message.message}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {formatDate(message.createdAt)}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => handleDelete(message.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}; 