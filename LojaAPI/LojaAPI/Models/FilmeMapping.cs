using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LojaAPI.Models
{
    public class FilmeMapping : IEntityTypeConfiguration<Filme>
    {
        public void Configure(EntityTypeBuilder<Filme> builder)
        {
            builder.ToTable("Filme");

            builder.HasKey(filme => filme.IdFilme)
                .IsClustered(true);

            builder.Property(filme => filme.IdFilme)
                .HasColumnName("IdFilme");

            builder.Property(filme => filme.NomeFilme)
               .HasColumnName("NomeFilme");

            builder.Property(filme => filme.idVotante)
               .HasColumnName("IdVotante");
            builder.Property(filme => filme.NomeVotante)
               .HasColumnName("NomeVotante");

        }

    }
}
