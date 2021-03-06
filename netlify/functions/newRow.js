setTimeout(() => {
    $(() =>{
      //ready
      console.log('data is loading.')
      const JSONDATA  = {{ $.Site.Data.priceAndHash.data }}

      $.ajax({
        url: 'https://api.blockchain.info/stats',
        success: data => {

          JSONDATA.push({
            price: data.market_price_usd,
            hash_rate: data.hash_rate
          })

          console.log(JSONDATA)

          $('#price-and-hash-content').append(`
          <div class="row" >
            <div class="col-2">
              <p>${data.market_price_usd}</p>
            </div>
            <div class="col">
              <p>${data.hash_rate}</p>
            </div>
          </div>`
          )
        }
      })

    } )
  }, 500)
