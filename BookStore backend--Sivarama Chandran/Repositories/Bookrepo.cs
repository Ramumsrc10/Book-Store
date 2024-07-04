using BookStoreAPI.Entities;

namespace BookStoreAPI.Repositories
{
    public class Bookrepo:IBookRepository
    {
        private readonly MyContext context;

        public Bookrepo(MyContext context)
        {
            this.context = context;
        }
        public void Add(Book book)
        {
            try
            {
                context.Books.Add(book);
                context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Delete(int id)
        {
            try
            {
                var item = context.Books.Find(id);
                context.Books.Remove(item);
                context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<Book> GetAll()
        {
            try
            {
                return context.Books.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Book GetByName(string name)
        {
            try
            {
                var item = context.Books.SingleOrDefault(x => x.Title==name);
                return item;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Update(Book book)
        {
            try
            {
                context.Books.Update(book);
                context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
