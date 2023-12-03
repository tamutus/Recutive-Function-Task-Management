import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonCreateManyInputSchema: z.ZodType<Prisma.PersonCreateManyInput> = z.object({
  id: z.number().int().optional(),
  username: z.string().optional().nullable(),
  bio: z.string().optional().nullable()
}).strict();

export default PersonCreateManyInputSchema;
