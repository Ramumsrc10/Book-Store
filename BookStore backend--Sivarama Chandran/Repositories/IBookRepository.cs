using BookStoreAPI.Entities;
namespace BookStoreAPI.Repositories
{
    public interface IBookRepository
    {
        void Add(Book book);
        void Update(Book book);
        void Delete(int id);
        List<Book> GetAll();
        Book GetByName(string name);
    }
}
