const pictureSize = (imgSelector) => {
   const blocks = document.querySelectorAll(imgSelector);

   const toggleImg = (block, show) => {
      const img = block.querySelector('img');
      const imgSrc = img.src;

      if (show) {
         img.src = imgSrc.replace('.png', '-1.png');
         block.querySelectorAll('p:not(.sizes-hit)').forEach((p) => (p.style.display = 'none'));
      } else {
         img.src = imgSrc.replace('-1.png', '.png');
         block.querySelectorAll('p:not(.sizes-hit)').forEach((p) => (p.style.display = 'block'));
      }
   };

   blocks.forEach((block) => {
      block.addEventListener('mouseover', () => toggleImg(block, true));
      block.addEventListener('mouseout', () => toggleImg(block, false));
   });
};

export default pictureSize;
