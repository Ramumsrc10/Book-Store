using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BookStoreAPI.Repositories;
using BookStoreAPI.Entities;
using Microsoft.AspNetCore.Authorization;

namespace BookStoreAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookRepository bookRepository;

        public BookController(IBookRepository productRepository)
        {
            this.bookRepository = productRepository;
        }

        [HttpPost, Route("AddBook")]
        [AllowAnonymous]
        public IActionResult Add(Book book)
        {
            try
            {
                bookRepository.Add(book);
                return Ok(book);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.InnerException.Message);
                return BadRequest(ex.Message);
            }
        }

        [HttpGet, Route("GetAll")]
        [AllowAnonymous]
        public IActionResult GetAll()
        {
            try
            {
                var books = bookRepository.GetAll();
                return Ok(books);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet, Route("GetByName/{name}")]
        [AllowAnonymous]
        public IActionResult GetByName(string name)
        {
            try
            {
                var book = bookRepository.GetByName(name);
                return Ok(book);
            }

            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete, Route("DeletebyId/{id}")]
        [AllowAnonymous]
        public IActionResult DeletebyId(int id)
        {
            try
            {
                bookRepository.Delete(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut, Route("Update")]
        [Authorize(Roles = "admin")]

        public IActionResult Update(Book book)
        {
            try
            {
                bookRepository.Update(book);
                return Ok(book);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
