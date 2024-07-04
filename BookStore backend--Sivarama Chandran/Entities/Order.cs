using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookStoreAPI.Entities
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }

        [Required]
        public DateTime OrderDate { get; set; }

        [ForeignKey("UserId")]
        public string UserId { get; set; }

        [ForeignKey("BookId")]
        public int BookId { get; set; }

        public int Quantity { get; set; }
    }
}
