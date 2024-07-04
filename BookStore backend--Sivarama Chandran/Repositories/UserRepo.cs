using BookStoreAPI.Entities;
namespace BookStoreAPI.Repositories
{
    public class UserRepo : IUserRepository
    {
        private readonly MyContext context;

        public UserRepo(MyContext context)
        {
            this.context = context;
        }
        public void ChangePassword(string userId, string oldpwd, string newpwd)
        {
            try
            {
                var item = context.Users.SingleOrDefault(x => x.UserId == userId);
                if (item != null)
                {
                    if(oldpwd == item.Password) {
                        item.Password=newpwd;
                    }
                }
                context.SaveChanges();
                

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void EditProfile(User user)
        {
            try
            {
                context.Users.Update(user);
                context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Register(User user)
        {
            try
            {
                context.Users.Add(user);
                context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public User? Login(string email, string pwd)
        {
            try
            {
                return context.Users.SingleOrDefault(u => u.Email == email && u.Password == pwd);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
