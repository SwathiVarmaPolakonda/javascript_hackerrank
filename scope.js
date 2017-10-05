// function Solution(A) {
// 	let sorted = A.sort( (a,b) => a -b );
// 	let max = A[A.length - 1];
// 	let min = A[0];
//
// 	return max - min;
// }

// int n=elements.size();
// int min=100;
// int max=1;
//
// for(int i=0;i<n;++i)
// {
//     if(elements[i]<min){min=elements[i];}
//     if(elements[i]>max){max=elements[i];}
// }
// maximumDifference=max-min;

// 2
// public Difference(var[] a )
// {
// elements = a;
// }
// public void computeDifference(){
// var max = elements.Max();
// var min = elements.Min();
// maximumDifference = max - min;
// }

// 3
// public Difference(int[] elements)
//   {
//       this.elements = elements;
//   }
//
//   public void computeDifference()
//   {
//       maximumDifference = elements.Max() - elements.Min();
//   }

//4
//   public void computeDifference() {
//     int n = elements.length;
//     Arrays.sort(elements);
//     maximumDifference = elements[n-1] - elements[0];
// }

//5
// void computeDifference()
//     {
//         short int i, max = 0, min = 101;
//         for(i = 0; i < elements.size(); ++i)
//             max = elements[i] > max ? elements[i] : max;
//         for(i = 0; i < elements.size(); ++i)
//             min = elements[i] < min ? elements[i] : min;
//         maximumDifference = max - min;
//     }

//6
//     public Difference(int[] a)
//     {
//     this.elements=a;
// }
// public void computeDifference()
//     {
//     int min=elements[0];
//     int max=elements[0];
//     for(int i=0;i<elements.length;i++)
//         {
//         if(elements[i]<min)
//             {
//             min=elements[i];
//         }
//         if(elements[i]>max)
//             {
//             max=elements[i];
//         }
//     }
// maximumDifference = Math.abs(max-min);
// }

//7
// class Difference {
//     private int[] elements;
//     public int maximumDifference;
//     Difference (int [] elements) {
//         this.elements = elements;
//     }
//
//     void computeDifference() {
//         int min = elements[0];
//         int max = elements[0];
//         for (int num : elements) {
//             min = Math.min(min, num);
//             max = Math.max(max, num);
//         }
//         maximumDifference = max - min;
//     }
// } // End of Difference class

//8
//c++
// short int i, max = 0, min = 101;
//   for(i = 0; i < elements.size(); ++i)
//       max = elements[i] > max ? elements[i] : max;
//   for(i = 0; i < elements.size(); ++i)
//       min = elements[i] < min ? elements[i] : min;
//   maximumDifference = max - min;
// }
