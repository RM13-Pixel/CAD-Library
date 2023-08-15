import React, {useState} from "react";
import '../Styles/FilterBar.css';

const FilterBar = ({subjects, fabEquipment, onFilterChange}) => {

    const [selected, setSelected] = useState([]);

    const handleFilterChange = (option) => {

        const isSelected = selected.includes(option);
        let updated = [];

        if(isSelected) {
            updated = selected.filter((filter) => filter !== option);
        } 
        else {
            updated = [...selected, option];
        }

        setSelected(updated);
        onFilterChange(updated);
    }



    return(
        <div id="filter-box">
            <h4> Subject </h4>
            {subjects.map((subject) =>
                <label id="checkbox" key={subject}>
                    <input id="subject-filter" type="checkbox" checked={selected.includes(subject)} onChange={() => handleFilterChange(subject)}>
                    </input>
                    {subject}
                </label> 
            )}
            <br></br>

            <h4> Fabrication Equipment </h4>
            {fabEquipment.map((equipment) =>
                <label id="checkbox" key={equipment}>
                    <input id="subject-filter" type="checkbox" checked={selected.includes(equipment)} onChange={() => handleFilterChange(equipment)}>
                    </input>
                    {equipment}
                </label> 
            )}


        </div>
    );
};

export default FilterBar;