//1
this.getHeight = function(root) {
  let height = -1,
    nodeCount;
  const visiting = [root];

  while ((nodeCount = visiting.length)) {
    height++;
    while (nodeCount-- > 0) {
      const node = visiting.shift();
      if (node.left) visiting.push(node.left);
      if (node.right) visiting.push(node.right);
    }
  }

  return height;
};
//2
// Add your code here
this.getHeight = function(root) {
  //node is null, no childen for parent
  if (root == undefined) {
    return -1;
  }
  // get the max of the between left and right
  var max = Math.max(this.getHeight(root.left), this.getHeight(root.right));

  return 1 + max;
};

//3
function getHeight(root) {
  if(root==null) {
    return -1;
  }
return 1+Math.max(this.getHeight(root.left), this.getHeight(root.right));
}

//4
function calculateHeight(root, maxHeight = -1) {
    if (root) {
      maxHeight += 1;
      return Math.max(calculateHeight(root.left, maxHeight),
                      calculateHeight(root.right, maxHeight));
    } else {
      return maxHeight;
    }
}

return calculateHeight(root);
//
public static int getHeight(Node root){
      //Write your code here
        if(root==null)
            return -1;
        else
        return 1 + Math.max(getHeight(root.left),getHeight(root.right));
    }
    //
    static int getHeight(Node root){
    if(root==null)
        return -1;
    int left=1,right=1;
    left += getHeight(root.left);
    right += getHeight(root.right);
    return left<right?right:left;
}

//java
static int getHeight(Node root){
      //Write your code here
   if (root == null)
        return -1;

   return Math.Max(getHeight(root.left), getHeight(root.right)) + 1;
    }

    //java
    public static int getHeight(Node root){
  //Write your code here
    int left=0;
    int right=0;
    if(root==null){return 0;}

    if(root.left!=null)
    {
      left=getHeight(root.left)+1;
    }
     if(root.right!=null)
    {
    right=getHeight(root.right)+1;
    }

    return Math.max(right,left);
}
//c++
int getHeight(Node* root){
          //Write your code here
          if(!root) {
              return -1;
          }
          int leftDepth = getHeight(root->left);
          int rightDepth = getHeight(root->right);

          return (leftDepth > rightDepth ? leftDepth : rightDepth) + 1;

      }
      //
      public static int getHeight(Node root){
       if(root == null) {
           return -1;
       }

       int left = 1 + getHeight(root.left);
       int right = 1 + getHeight(root.right);

       return Math.max(left, right);
    }
    //
    public static int getHeight(Node root){
   if(root == null) {
        return -1;
   } else{
       int leftDepth  = 1 + getHeight(root.left);
       int rightDepth = 1 + getHeight(root.right);

       return (leftDepth > rightDepth ? leftDepth : rightDepth ) ;
   }

}
