module.exports = function(bp) {
    bp.middlewares.load()
  // Listens for a first message (this is a Regex)
  // GET_STARTED is the first message you get on Facebook Messenger
  bp.hear(/GET_STARTED|hello|hi|test|hey|holla/i, (event, next) => {
    event.reply('#welcome') // See the file `content.yml` to see the block
  })
  bp.hear('QR_C', (event, next) => {
      event.reply('#QR_Costumer')
  })
  bp.hear('QR_F', (event, next) => {
      event.reply('#QR_Furnisher')
  })
  bp.hear('QR_JC', (event, next) => {
      event.reply('#QR_JC')
    })
  bp.hear('QR_IG', (event, next) => {
        event.reply('#IG_contact')
      })


  bp.hear('QR_R', (event, next) => {
      event.reply('#Ryada')
          })
  bp.hear('QR_IP', (event, next) => {
      event.reply('#Help_Needed')
  })
  bp.hear('QR_CT', (event, next) => {
      event.reply('#ComTra')
  })
  bp.hear('QR_CO', (event, next) => {
      event.reply('#Complaints')
  })
  bp.hear('QR_TR', (event, next) => {
      event.reply('#Tracking')
  })
  bp.hear('QR_GI', (event, next) => {
      event.reply('#InfoG')
  })
  bp.hear('QR_CA', (event, next) => {
      event.reply('#CreateAccount')
  })
  bp.hear('QR_DT', (event, next) => {
      event.reply('#DeliveryTime')
  })
  bp.hear('QR_PM', (event, next) => {
      event.reply('#PaymentMethod')
  })
  bp.hear('QR_S', (event, next) => {
      event.reply('#Support')
  })
  bp.hear('QR_H', (event, next) => {
      event.reply('#Home')
  })
  bp.hear('QR_SI', (event, next) => {
      event.reply('#SportevoInfo')
  })
  bp.hear('QR_WW', (event, next) => {
          event.reply('#WWAre')
      })
  bp.hear('QR_VA', (event, next) => {
          event.reply('#ValueAdded')
      })
  bp.hear('QR_SP', (event, next) => {
          event.reply('#SuitableProducts')
      })
  bp.hear('QR_JU', (event, next) => {
          event.reply('#FRegister')
      })
  bp.hear('QR_HT', (event, next) => {
          event.reply('#UpProduct')
      })
  bp.hear('QR_PC', (event, next) => {
          event.reply('#PanelControl')
      })
  bp.hear('QR_FF', (event, next) => {
          event.reply('#FullFillForm')
      })
  bp.hear('QR_BB', (event, next) => {
          event.reply('#ByeBye')
      })
  bp.hear('QR_HT', (event, next) => {
          event.reply('#UpProduct')
      })
  bp.hear('QR_PC', (event, next) => {
          event.reply('#PanelControl')
      })

  bp.hear('QR_FI', (event, next) => {
              event.reply('#FillPD')
          })


}
