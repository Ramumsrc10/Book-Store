using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookStoreAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace BookStoreAPI.Repositories
{
    public class OrderRepo : IOrderRepository
    {
        private readonly MyContext context;

        public OrderRepo(MyContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<Order>> GetAllOrdersAsync()
        {
            return await context.Orders.ToListAsync();
        }

        public async Task<Order> GetOrderByIdAsync(int orderId)
        {
            return await context.Orders.FindAsync(orderId);
        }

        public async Task<IEnumerable<Order>> GetOrdersByUserIdAsync(string userId)
        {
            return await context.Orders.Where(o => o.UserId == userId).ToListAsync();
        }

        public async Task AddOrderAsync(Order order)
        {
            await context.Orders.AddAsync(order);
            await context.SaveChangesAsync();
        }

        public async Task UpdateOrderAsync(Order order)
        {
            context.Orders.Update(order);
            await context.SaveChangesAsync();
        }

        public async Task DeleteOrderAsync(int orderId)
        {
            var orderToDelete = await context.Orders.FindAsync(orderId);
            if (orderToDelete != null)
            {
                context.Orders.Remove(orderToDelete);
                await context.SaveChangesAsync();
            }
        }
    }
}
