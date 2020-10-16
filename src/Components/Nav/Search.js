import React from 'react'

export default class Search extends Component {
    state = {
        query: "",
        data: [],
        filteredData: []
    };

    handleInputChange = e => {
        const query = e.targert.value;

        this.setState(prevState => {
            const filteredData = prevState.data.filter(element => {
                return element.name.toLowerCase().includes(query.toLowerCase())
            });
        });

        return {
            query,
            fileredData
        };
    };

    getData = () => {
        fetch(`http://localhost:3000/tech`)
          .then(response => response.json())
          .then(data => {
              const { query } = this.state;
              const filteredData = data.filter(element => {
                  return element.name.toLowerCase().includes(query.toLowerCase());
              })
          });

          this.setState({
              data,
              filteredData
          });
    }


}