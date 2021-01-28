
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace LojaAPI.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
           // Database.EnsureCreated();
        }

        public DbSet<Filme> Filmes { get; set; }
        public DbSet<Login> Usuarios { get; set; }
        public DbSet<Mensagem> Mensagens { get; set; }
        //public object Produto { get; internal set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new FilmeMapping());
            modelBuilder.ApplyConfiguration(new LoginMapping());
            modelBuilder.ApplyConfiguration(new MensagemMapping());
            // modelBuilder.ApplyConfiguration(new ClienteMapping());

        }

        public int getTotalVotos() {

            int total = Filmes.Count();
            return total;
        }
        public List<Login> getLogin()
        {

            return Usuarios.ToList<Login>();
        }

        public void AddVoto(Filme filme)
        {
            Filmes.Add(filme);
            this.SaveChanges();
            return;
        }

        public void AddMensagem(Mensagem mensagem)
        {
            Mensagens.Add(mensagem);
            this.SaveChanges();
            return;
        }
    }
}