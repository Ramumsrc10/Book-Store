using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace BookStoreAPI.Entities
{
    public class Book
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }

        public string Author { get; set; }

        public string Genre {  get; set; }

        public int Price {  get; set; }

        public string Image { get; set; }

    }
}
