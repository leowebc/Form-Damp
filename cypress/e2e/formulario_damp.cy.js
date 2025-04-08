import 'cypress-xpath';
require('cypress-plugin-tab')


describe( 'Damp' , () => {
    
    //   it('Cadastrar uma entrada', () => {
    //       cy.visit("https://damphomologa.hml.cloud.poupex/")
    //       cy.origin("https://hmlsso.poupex.com.br/my.policy", () => {
    //          cy.get('#cpf').type('04006363109')
    //          cy.get('.btn').click()
    //         })     
       
    //   })

    before(() => {
    //     cy.login('04006363109')
         //cy.viewport(1024, 768)
     })
    
    it('home ', ()  => {
        cy.visit('https://damphomologa.hml.cloud.poupex/home')  
            
        cy.get(':nth-child(5) > .p-ripple').click()
        cy.get('.flex > :nth-child(2) > .p-element > .p-button-label').click()
        cy.get('app-verificar-impedimentos-dialog > .w-auto > .p-button-label').click()
        
        cy.xpath('//input[@id="pergunta1_nao"]').check({force:true})
        cy.xpath('//input[@id="pergunta2_nao"]').check({force:true})
        cy.xpath('//input[@id="pergunta3_sim"]').check({force:true})
        cy.xpath('//input[@id="pergunta4_sim"]').check({force:true})
        cy.xpath('//input[@id="pergunta5_nao"]').check({force:true})
        cy.xpath('//input[@id="pergunta6_nao"]').check({force:true})
        cy.get('.mt-2 > :nth-child(2)').click()

    })

        it('Cliente', ()  => {
            cy.visit('https://damphomologa.hml.cloud.poupex/pedidos-damp/cadastrar/cliente')

            cy.get('#nomeMutuario').type('Automação Cypress')
            cy.get('#cpfMutuario > .p-inputtext').type('71811273149')
            cy.get('.p-calendar > .p-inputtext').type("02-04-2025")
            cy.get('#municipioReside').type('Brasília')
            
            cy.get('#ufReside > .p-dropdown > .p-dropdown-trigger').type('DF').click()
            cy.get('#estadoCivil > .p-dropdown > .p-dropdown-trigger').type('Solteiro').click()
            cy.get(':nth-child(2) > #uniaoEstavel > .p-radiobutton > .p-radiobutton-box').click()
            cy.get('.justify-end > .p-element').click()
        })

        it('Imóvel' , ()  => {
            cy.visit('https://damphomologa.hml.cloud.poupex/pedidos-damp/cadastrar/imovel')
            cy.get('#cep').type('72007510').blur()
            cy.get('#nomeEmpresa').type('POUPEX')
            cy.get('#municipioOcupacaoLaboral').type('Brasília')
            cy.get('#idEmpresaLaboral > .p-dropdown > .p-dropdown-trigger').type('AL').click()
            cy.get('.w-auto').click()
            cy.get('#fgtsModalidade > .p-dropdown > .p-dropdown-trigger').type('Pagamento de parte do valor das prestações.').click()
            cy.get('.p-inputnumber > .p-inputtext').type('25000').tab()
            cy.get('.mt-6 > :nth-child(2)').click()
            cy.get('.aling-between > :nth-child(2)').click()
    
        })

    it('Termo de Ciência', ()  => {
        cy.visit('https://damphomologa.hml.cloud.poupex/pedidos-damp/cadastrar/termo-ciencia')
        cy.get('#termoCiencia1_1 > .p-radiobutton > .p-radiobutton-box').click()
        cy.get('#termoCiencia2_2 > .p-radiobutton > .p-radiobutton-box ').click()
        cy.get('#termoCienciaNovo1_1 > .p-radiobutton > .p-radiobutton-box').click()
        cy.get('#termoCienciaNovo2_2 > .p-radiobutton > .p-radiobutton-box').click()
        cy.get('#termoCiencia3_1 > .p-radiobutton > .p-radiobutton-box ').click()
        cy.get('#termoCiencia4_2 > .p-radiobutton > .p-radiobutton-box ').click()
        cy.get('#termoCiencia5_1 > .p-radiobutton > .p-radiobutton-box ').click()
        cy.get('#termoOutroFinanciamento2 > .p-radiobutton > .p-radiobutton-box ').click()
        cy.get('#termoPossuiOutroImovel2 > .p-radiobutton > .p-radiobutton-box').click()
        cy.get('#termoImovelMunicipio2 > .p-radiobutton > .p-radiobutton-box').click()
        cy.get('.p-button-primary').click()
    })

    it('Termo de Aceite ', () => {
        cy.visit('https://damphomologa.hml.cloud.poupex/pedidos-damp/cadastrar/termo-aceite')
        cy.get(':nth-child(1) > #aceite > .p-radiobutton > .p-radiobutton-box').click()
        cy.get('.aling-between > :nth-child(2)').click()

    });
    // 04037732106
})
