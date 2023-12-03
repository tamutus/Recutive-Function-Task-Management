import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagCountOutputTypeSelectSchema } from './PrivateTagCountOutputTypeSelectSchema';

export const PrivateTagCountOutputTypeArgsSchema: z.ZodType<Prisma.PrivateTagCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PrivateTagCountOutputTypeSelectSchema).nullish(),
}).strict();

export default PrivateTagCountOutputTypeSelectSchema;
