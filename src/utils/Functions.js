    export const fetchActiveAuctions = async () => {

      try {
        const response = await fetch('bids.json')
        const data = await response.json()
        return data;
        
      } catch (error) {
        console.error('Error fetching active auctions:', error)
      }

    }

    