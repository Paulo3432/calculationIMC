const patients = [
    {
        name: "Luiz",
        age: 20,
        weight:100,
        height:190 
    },
    {
        name:"Alexandra",
        age:27,
        weight:70,
        height:170

    },
    {
        name:"Carlos",
        age:42,
        weight:90,
        height:185
    }    
]
function IMC(weight,height){
    return (weight / (height / 100)**2).toFixed(2)
}

function printPatientIMC(patient){
    return`
    Paciente ${patient.name} possui o IMC de 
    ${IMC(patient.weight, patient.height)}
    `
}

for(let patient of patients){
    let Imcmessage = printPatientIMC(patient)
    alert(Imcmessage)
}