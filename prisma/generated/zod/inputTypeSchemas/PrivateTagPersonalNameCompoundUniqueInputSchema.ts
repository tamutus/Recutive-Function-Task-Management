import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagPersonalNameCompoundUniqueInputSchema: z.ZodType<Prisma.PrivateTagPersonalNameCompoundUniqueInput> = z.object({
  personId: z.number(),
  name: z.string()
}).strict();

export default PrivateTagPersonalNameCompoundUniqueInputSchema;
