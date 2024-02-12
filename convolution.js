function convolve(f)
{
    function apply_convolution(a)
    {
        let N = a.length;
        if (N > 1)
        {
            let support_curr, support_next;
            for (let i = 0; i < N; i++)
            {
                support_next = a[i];
                if (i == 0)
                {
                    a[i] = f(0, a[i], a[i+1]);
                }
                else if (i >= 1 && i <= N-2)
                {
                    a[i] = f(support_curr, a[i], a[i+1]);
                }
                else 
                {
                    a[i] = f(support_curr, a[i], 0);
                }
            support_curr = support_next;
            }
        }
        return a;
    }
  
  return apply_convolution
}
