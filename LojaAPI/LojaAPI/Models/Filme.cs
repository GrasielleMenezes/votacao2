using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LojaAPI.Models
{
    public class Filme
    {
        public int IdFilme { get; set; }
        [Required]
        [MaxLength(100)]
        public string NomeVotante { get; set; }
        public int idVotante { get; set; }
        public string NomeFilme { get; set; }

    }
    public class Login
    {
        public int IdLogin { get; set; }
        [Required]
        [MaxLength(100)]
        public string Nome { get; set; }
        public string senha { get; set; }
        
    }
    public class Mensagem
    {
        public int IdLogin { get; set; }
        [Required]
        [MaxLength(100)]
        public string DescricaoMensagem { get; set; }

    }

}
