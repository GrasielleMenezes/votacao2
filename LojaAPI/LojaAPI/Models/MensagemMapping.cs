using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LojaAPI.Models
{
    public class MensagemMapping : IEntityTypeConfiguration<Mensagem>
    {
        public void Configure(EntityTypeBuilder<Mensagem> builder)
        {
            builder.ToTable("Mensagem");

            builder.HasKey(mensagem => mensagem.IdLogin)
                .IsClustered(true);

            builder.Property(mensagem => mensagem.IdLogin)
                .HasColumnName("IdLogin");

            builder.Property(mensagem => mensagem.DescricaoMensagem)
               .HasColumnName("DescricaoMensagem");

        }

    }
}
