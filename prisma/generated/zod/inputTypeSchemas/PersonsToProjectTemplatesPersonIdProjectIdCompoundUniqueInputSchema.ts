import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToProjectTemplatesPersonIdProjectIdCompoundUniqueInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesPersonIdProjectIdCompoundUniqueInput> = z.object({
  personId: z.number(),
  projectId: z.number()
}).strict();

export default PersonsToProjectTemplatesPersonIdProjectIdCompoundUniqueInputSchema;
