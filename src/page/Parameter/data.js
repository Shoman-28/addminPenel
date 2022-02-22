export const parameterData = [
  {
    id: 1,
    checkBox: false,
    fLabel: "Slice Thickness",
        inputValue: "",
        isInput:true,
   
    sLabel: "mm",
    des: "Slice thickness controls how much tissue we will average into a 2-dimensional slice. The thicker our slice thickness, the more tissue we are averaging into our image. This can lead to image blurring called partial average volume artifact. Increasing our slice thickness can also promote higher SNR and increase coverage. As we increase coverage, we may be able to use less slices which leads to shorter scan times",
  },
  {
    id: 2,
    checkBox: false,
    fLabel: "Slice Gap",
        inputValue: "",
    isInput:true,
    sLabel: "mm",
    des: "Slice gap is a parameter that controls the spacing in between slices. The main benefit of this is to increase coverage so that we need less slices. This leads to shorter scan times. The issue with utilizing a slice gap is that pathology may be missed.",
  },
  {
    id: 3,
    checkBox: false,
    fLabel: "FOV",
        inputValue: "",
    isInput:true,
    sLabel: "mm",
    des: "The field of view controls the coverage included in our image. It acts as a frame around our image. Based on other parameters, we will have a fixed number of pixels in our image. As we decrease our field of view, we squeeze those pixels together making them smaller. If our pixels get smaller, our spatial resolution increases. This means that a decrease in field of view leads to an increase in spatial resolution. The downside of this is that our signal to noise ratio will decrease. This is because there is an inverse relationship between spatial resolution and SNR.",
  },
  {
    id: 4,
    checkBox: false,
    fLabel: "PE",
        inputValue: "",
    isInput:true,
    sLabel: "",
    des: "Phase encoding defines the number of lines in our data space or K space.  As we increase our phase encoding, we increased the number of lines that need to be filled with echoes. This means we need to produce more echoes which leads to an increase in scan time. As we increase the number of lines however, we increase our spatial resolution. This parameter combined with our frequency encoding direction make up our image matrix or a grid of pixels which represent our patient. As we increase the number of phase encoding lines in our image, they are squeezed together due to a fixed field of view, and this leads to increased spatial resolution. There is an inverse relationship between spatial resolution and SNR which means that as we increase our phase encoding, we decrease our SNR.",
  },
  {
    id: 5,
    checkBox: false,
    fLabel: "FE",
        inputValue: "",
    isInput:true,
    sLabel: "",
    des: "Frequency encoding is a parameter that defines how many data points we will use to represent patient frequencies in the frequency encoding direction. As we increase our frequency encoding, we increase the number of data points used to replicate our patient signal. This can increase our echo spacing however it does not always increase our scan time. As we increase our frequency encoding, we increase the number of lines in our frequency encoding direction squeezing them together due to a fixed field of view. This means that we will increase our spatial resolution which leads to a decrease in SNR due too in inverse relationship between the two.",
  },
  {
    id: 6,
    checkBox: false,
    fLabel: "#Slices",
        inputValue: "",
    isInput:true,
    sLabel: "",

    des: "The number of slices define how many pictures we need to cover in area of our patient. This is limited to how long our repetition time is and how many echoes we are collecting per repetition time.",
  },
  {
    id: 7,
    checkBox: false,
    fLabel: "Phase Direction",
     inputValue: "",
    isInput:false,
    sLabel: "",
    des: "Phase encoding direction defines which orientation our phase encoding lines will be filled. This is important due to the many artifacts seen in this direction. The big artifacts to worry about in our phase direction is aliasing or wrap artifact and motion.",
  },
  {
    id: 8,
    checkBox: false,
    fLabel: "Alias On | OF",
    inputValue: "",
    isInput:false,
    sLabel: "",
    des: "Any tissue outside of our field of view in the phase encoding direction can lead to aliasing artifact. This parameter will compensate for this accounting for tissue outside our field of view in the phase encoding direction",
  },
  {
    id: 9,
    checkBox: false,
    fLabel: "React FOV ",
        inputValue: "",
    isInput:true,
    sLabel: "%",
    des: "Rectangular field of view is a parameter that will add or subtract information collected in the phase encoding direction. Is important to remember that we are not changing the number of lines in our k space and therefore this parameter will not influence our spatial resolution. It will however alter how much signal we collect from our patient and therefore as we decrease our rectangular field of view, we will decrease our SNR. Also, if we decrease our rectangular field of view, we no longer need to collect as many lines of k space to build an image and therefore can reduce our scan time.",
  },
  {
    id: 10,
    checkBox: false,
    fLabel: "NSA",
        inputValue: "",
    isInput:true,
    sLabel: "",
    des: "There are many situations where we have a signal deprived image. The number of signal averages can be increased so that we can increase our signal to noise ratio. What happens when we do this is that we collect multiple sets of information for the same slice depending on our signal averages we input. We can then average these data sets together to produce in average data set. Since noise is random, we can decrease the noise in our image by this factor sqrt 2.",
  },
  {
    id: 11,
    checkBox: false,
    fLabel: "NA",
        inputValue: "",
    isInput:true,
    sLabel: "",
    des: "The number of acquisitions is a parameter that allows us to separate the echoes collected for a given TR into multiple measurements. The result is that we can use a shorter repetition time or utilize multiple breath holds when needed.",
  },
  {
    id: 12,
    checkBox: false,
    fLabel: "Saturation On | Off",
    inputValue: "",
    isInput:false,
    sLabel: "",
    des: "It is important to suppressed tissue in our image too optimize pathological processes. We can suppress fat, water, or silicone based on the unique frequencies They have. This is very sensitive to the homogeny or uniformity of our magnetic field at isocenter. Because we’re not dependent on tissue relaxation to suppress tissues in our image, we can use this technique pre and post contrast.",
  },
  {
    id: 13,
    checkBox: false,
    fLabel: "Restore On | Off",
    inputValue: "",
    isInput:false,
    sLabel: "",
    des: "No Description ",
  },
  {
    id: 14,
    checkBox: false,
    fLabel: "Half Fourier",
        inputValue: "",
    isInput:true,
    sLabel: "%",
    des: "Half Fourier is a technique that relies on the fact that our k space is a mirror image of itself. This means that the top half of our k space is a mirror image of the bottom half, and the right half is a mirror of the left half. Because of this, if we fill a minimum of 53% of our k space with echoes and fill the rest with the zeros, we can produce a diagnostic image. By doing this, we can reduce the number of echoes we need to collect and therefore decrease our scan time. Since we are collecting less echoes from our patient, our SNR will decrease when implementing this technique.",
  },
  {
    id: 15,
    checkBox: false,
    fLabel: "Parallel Imaging On | Off",
    inputValue: "",
    isInput:false,
    sLabel: "",
    des: "Parallel imaging is a technique that can be used when we have two or more coil elements in the phase encoding direction. By using each coil element separately to collect data, we can produce multiple aliased images in a shorter scan time. By combining these datasets together, we can produce one full image in a shorter duration of time. This technique will shorten our scan time but also decrease our SNR.",
  },
  {
    id: 16,
    checkBox: false,
    fLabel: "Confirm Frequency Yes | No (use a checkbox)",
    inputValue: "",
    isInput:false,
    sLabel: "",
    des: "Due to electron sharing throughout the electron cloud of fat molecules, it produces a slightly different magnetism than water and therefore precesses different than water. This produces chemical shift between fat and water. Confirming our frequency allows us to isolate a frequency we want to focus on to either suppress a tissue or enhance a tissue.",
  },
  {
    id: 17,
    checkBox: false,
    fLabel: "Cardiac gating Retrospective | Prospective",
    inputValue: "",
    isInput:false,
    sLabel: "",
    des: "There are two ways we can perform cardiac gating. Prospective gating will image during diastole. Retrospective gating will image throughout the entire cardiac cycle and produce images at different stages along it. This leads to a dataset which looks like a movie of the heart pumping.",
  },
  {
    id: 18,
    checkBox: false,
    fLabel: "Cardiac Segment",
        inputValue: "",
    isInput:true,
    sLabel: "",
    des: "When performing retrospective cardiac gating, we have the option to select how many points along the cardiac cycle we want to produce an image in. In other words, how many echoes we want to collect throughout the cardiac cycle. Increasing this number will allow for more images of the cardiac cycle however it will lead to an increase in temporal resolution which can cause artifacts in our image.",
  },
  {
    id: 19,
    checkBox: false,
    fLabel: "Cardiac Phase",
        inputValue: "",
    isInput:true,
    sLabel: "",
    des: "This parameter will allow us to reconstruct additional phases of the cardiac cycle based on phases we’ve already collected.",
  },
  {
    id: 20,
    checkBox: false,
    fLabel: "Trigger Window",
        inputValue: "",
    isInput:true,
    sLabel: "ms",
    des: "When performing prospective gating, we need to identify an acquisition window which is optimal for imaging. We use our R-R peaks to trigger imaging. In order to isolate our acquisition window, we must add a delay Before our first R peak. This is our trigger window.",
  },
  {
    id: 21,
    checkBox: false,
    fLabel: "Trigger Delay",
        inputValue: "",
    isInput:true,
    sLabel: "ms",
    des: "In order to appropriately identify or acquisition window, we utilize our R-R peak. In order to capture the point of our cardiac cycle where our heart is not moving for the longest duration of time, we must add a delay after our first peak. We call this the trigger delay.",
  },
  {
    id: 22,
    checkBox: false,
    fLabel: "Acquisition Window",
        inputValue: "",
    isInput:true,
    sLabel: "ms",
    des: "The period of time we collect data when using perspective gating is called our acquisition window. We identified this time using our trigger window and trigger delay. This period of time will always be less then the time it takes from one peak to the next. This causes an issue when trying to obtain T2 weighted images. When imaging T2 weighted images, we sometimes need to utilize more than one R-R peak.",
  },
  {
    id: 23,
    checkBox: false,
    fLabel: "Measurement",
        inputValue: "",
    isInput:true,
    sLabel: "",
    des: "The number of measurements defines how many times we will capture the same image per a given acquisition. This is utilized when performing a dynamic imaging. Temporal resolution becomes very important when we choose to use multiple measurements.",
  },
  {
    id: 24,
    checkBox: false,
    fLabel: "RBW",
        inputValue: "",
    isInput:true,
    sLabel: "Hz/px",
    des: "Receiving bandwidth defines the rate that we sample our patient frequency at TE. Receiving bandwidth is tied closely with TE and our frequency encoding. As we increase our receiving bandwidth, we decrease our sample time which leads to possibly having the option to use shorter TR values. It also allows us to replicate our patient frequency more accurately and therefore decrease metal artifacts and blurring in our image. By decreasing our receiving bandwidth, we increase our sample time which increases our SNR and decreases our SAR. By doing this however we will decrease the contrast to noise ratio in our image.",
  },
  {
    id: 25,
    checkBox: false,
    fLabel: "ETL",
        inputValue: "",
    isInput:true,
    sLabel: "",
    des: "Echo train length is a parameter utilized when performing spin echo sequences. It defines how many echoes we will collect within a given TR. As we increase our echo train length, we theoretically decrease our scan time and increase our SNR. The disadvantage of this parameter is that as we increase our echo train length, we increase the number of low-quality echoes collected which lead to image blurring. Echo train length also promotes T2 contrast when increased.",
  },
  {
    id: 26,
    checkBox: false,
    fLabel: "Gradient Mode On | Off",
    inputValue: "",
    isInput:false,
    sLabel: "",
    des: "This parameter will change the way we ramp up our gradients. In other words, it changes our rise time rate. By doing this, we can potentially reduce artifacts in our image, reduced the loud noises produced from the MRI unit, and increase our echo spacing.",
  },
  {
    id: 27,
    checkBox: false,
    fLabel: "RF Mode On | Off",
    inputValue: "",
    isInput:false,
    sLabel: "",
    des: "This parameter will change the way we perform our RF pulse. By increasing the duration of our RF pulse, we can decrease our SAR. We call this a soft pulse. This however can lead to increased scan times. On the contrary, if we decrease the duration of our RF pulse, we deliver a short burst of energy which can increase SAR.",
  },
  {
    id: 28,
    checkBox: false,
    fLabel: "VENC",
        inputValue: "",
    isInput:true,
    sLabel: "cm/s",
    des: "This parameter is unique to the phase contrast sequence. It determines the velocity of tissue we wish to be sensitive to. As we increase our VENC, we become more sensitive to faster moving tissue. It is important to identify the appropriate velocity of the tissue being imaged in order to accurately represent it.",
  },
  {
    id: 29,
    checkBox: false,
    fLabel: "B Value",
   inputValue: "",
    isInput:true,
    sLabel: "",

    des: "This parameter is unique to DWI. It determines how much diffusion we will see in our image. As we increase this parameter, we may will see more diffusion in our tissue. This will also reduce our SNR.",
  },
  {
    id: 30,
    checkBox: false,
    fLabel: "R.R",
    inputValue: "",
    isInput:true,
    sLabel: "ms",
    des: "No Description ",
  },
  {
    id: 31,
    checkBox: false,
    fLabel: "Breathhold On | Off",
    isInput:false,
    inputValue: "",
    sLabel: "",
    des: "When wishing to image our patient while they hold their breath, we need to use this parameter. It will allow us to image our patient over one or more breath holds. The number of acquisitions is a parameter that controls this.",
  },
]

export const   rightData = [
  {
    id: 1,
    checkBox: false,
    fLabel: "SNR",
    isInput: false,
    sLabel: "",
    inputValue: "",
  },
  {
    id: 2,
    checkBox: false,
    fLabel: "CNR",
    isInput: false,
    sLabel: "",
    inputValue: "",
  },
  {
    id: 3,
    checkBox: false,
    fLabel: "Scan Time",
    isInputMax: true,
    sLabel: "ms",
    isInputMin: true,
    inputValueMax: "",
    inputValueMin: ""
  },
  {
    id: 4,
    checkBox: false,
    fLabel: "Temporal Resolution",
    isInputMax: true,
    sLabel: "ms",
    isInputMin: true,
    inputValueMax: "",
    inputValueMin: ""
  },
  {
    id: 5,
    checkBox: false,
    fLabel: "SAR",
    isInputMax: true,
    sLabel: "W/Kg",
    isInputMin: true,
    inputValueMax: "",
    inputValueMin: ""
  },
  {
    id: 6,
    checkBox: false,
    fLabel: "SED",
    isInputMax: true,
    sLabel: "J/Kg",
    isInputMin: true,
    inputValueMax: "",
    inputValueMin: ""
  },
  {
    id: 7,
    checkBox: false,
    fLabel: "B1+rms",
    isInputMax: true,
    sLabel: "Microtesla",
    isInputMin: true,
    inputValueMax: "",
    inputValueMin: ""
  },
  {
    id: 8,
    checkBox: false,
    fLabel: "PNS",
    isInputMax: true,
    sLabel: "T/m/s",
    isInputMin: true,
    inputValueMax: "",
    inputValueMin: ""
  }
]

 // check list data

 export const ImageContrastData = [
  { id: 1, label: "T1" },
  { id: 2, label: "T2" },
  { id: 3, label: "PD" },
  { id: 4, label: "IR:STIR" },
  { id: 5, label: "IR: FLAIR" },
  { id: 6, label: "Phase Contrast" },
  { id: 7, label: "DWI" },
  { id: 8, label: "TOF" },
  { id: 9, label: "SSFP" },
]

export const pluseSequenceData = [
  { id: 1, label: "SE" },
  { id: 2, label: "GRE" },
  { id: 3, label: "DWI" },

  { id: 4, label: "Phase Contrast" },
  { id: 5, label: "TOF" },
  { id: 6, label: "SSFP" },
]