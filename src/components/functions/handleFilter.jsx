export default function handleFilter(setState,btnActive){
    if (btnActive===1){
      setState(prevState=>({...prevState,
        brightness: 90,
        grayscale: 0,
        invert:0,
        blur:0,
        sepia: 30,
        saturate: 100,
        contrast: 120,
        hueRotate: 10,
        opacity:100
      }))
    }
    else if (btnActive===2){
      setState(prevState=>({...prevState,
        brightness: 100,
        grayscale: 50,
        invert:0,
        blur:0,
        sepia: 0,
        saturate: 200,
        contrast: 150,
        hueRotate: 0,
        opacity:100
      }))
    }
    else if (btnActive===3){
      setState(prevState=>({...prevState,
        brightness: 120,
        grayscale: 0,
        invert:0,
        blur:0,
        sepia: 0,
        saturate: 150,
        contrast: 150,
        hueRotate: 90,
        opacity:100
      }))

    }
    else if (btnActive===4){
      setState(prevState=>({...prevState,
        brightness: 120,
        grayscale: 0,
        invert:0,
        blur:2,
        sepia: 20,
        saturate: 100,
        contrast: 100,
        hueRotate: 0,
        opacity:80
      }))

    }
    else if (btnActive===5){
      setState(prevState=>({...prevState,
        brightness: 90,
        grayscale: 0,
        invert:0,
        blur:0,
        sepia: 0,
        saturate: 20,
        contrast: 120,
        hueRotate: 180,
        opacity:100
      }))

    }
    else if (btnActive===6){
      setState(prevState=>({...prevState,
        brightness: 110,
        grayscale: 0,
        invert:0,
        blur:0,
        sepia: 0,
        saturate: 100,
        contrast: 100,
        hueRotate: 0,
        opacity:90
      }))

    }
    else if (btnActive===7){
      setState(prevState=>({...prevState,
        brightness: 100,
        grayscale: 0,
        invert:0,
        blur:0,
        sepia: 10,
        saturate: 150,
        contrast: 100,
        hueRotate: 0,
        opacity:150
      }))

    }else if(btnActive===8){
      setState(prevState=>({...prevState,
        brightness: 120,
        grayscale: 0,
        invert:0,
        blur:0,
        sepia: 0,
        saturate: 80,
        contrast: 100,
        hueRotate: 0,
        opacity:80
      }))
    }else{
      setState(prevState=>({...prevState,
        brightness: 100,
        grayscale: 0,
        invert:0,
        blur:0,
        sepia: 0,
        saturate: 100,
        contrast: 100,
        hueRotate: 0,
        opacity:100
      }))
    }
  }