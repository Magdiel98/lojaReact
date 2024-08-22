import React from "react";
import './css/Tabela.css'


function Tabela(){
    return(
        <main className="container py-5 d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center">
            <table className="table table-info table-hover align-middle text-center caption-top shadow">
                <thead className="table-primary">
                    <tr>
                        <th>Numeração</th>
                        <th>34</th>
                        <th>36</th>
                        <th>38</th>
                        <th>40</th>
                        <th>42</th>
                        <th>44</th>
                        <th>46</th>
                        <th>48</th>
                        <th>50</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">

                    <tr>
                        <td>Tamanho</td>
                        <td>PP</td>
                        <td>PP</td>
                        <td>P</td>
                        <td>P</td>
                        <td>M</td>
                        <td>M</td>
                        <td>G</td>
                        <td>G</td>
                        <td>GG</td>
                    </tr>
    
                    <tr>
                        <td>Busto</td>
                        <td>76-80</td>
                        <td>81-85</td>
                        <td>86-89</td>
                        <td>90-93</td>
                        <td>94-97</td>
                        <td>98-101</td>
                        <td>102-105</td>
                        <td>106-110</td>
                        <td>111-115</td>
                    </tr>
                    
                    <tr>
                        <td>Cintura</td>
                        <td>57-61</td>
                        <td>62-66</td>
                        <td>67-70</td>
                        <td>71-74</td>
                        <td>75-78</td>
                        <td>79-82</td>
                        <td>83-86</td>
                        <td>87-91</td>
                        <td>92-96</td>
                    </tr>
                    
                    <tr>
                        <td>Quadril</td>
                        <td>85-89</td>
                        <td>90-94</td>
                        <td>95-98</td>
                        <td>99-102</td>
                        <td>103-106</td>
                        <td>107-110</td>
                        <td>111-114</td>
                        <td>115-119</td>
                        <td>120-124</td>
                    </tr>

                </tbody>
                <caption className="text-center">Tabela de Medidas</caption>
            </table>
        </div>
    </main>
    )
}


export default Tabela; 