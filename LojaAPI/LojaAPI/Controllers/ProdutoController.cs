
using LojaAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace LojaAPI.Controllers
{


    [ApiController]
    [Route("api")]
    public class ProdutoController : ControllerBase
    {
        //private readonly ILogger<ApiController> _logger;
        private readonly AppDbContext _context;
        public ProdutoController(AppDbContext context)
        //ILogger<ApiController> logger, )
        {
            //_logger = logger;
            _context = context;
        }
        
        [HttpGet]
        [Route("login")]
        public List<Login> getLogin() {
            return _context.Usuarios.ToList<Login>();
        }
        
        [HttpGet]
        [Route("total")]
        public int getTotalVotos()
        {
            return _context.Filmes.Count();
        }
        
        [HttpPost]
        [Route("filme")]
        public IActionResult AddVoto([FromBody] Filme filme)
        {
            
            _context.AddVoto(filme);
            return Ok(filme);
        }

        [HttpPost]
        [Route("mensagem")]
        public IActionResult AddMensagem([FromBody] Mensagem mensagem)
        {
            
            _context.AddMensagem(mensagem);
            return Ok(mensagem);
        }


    }
}