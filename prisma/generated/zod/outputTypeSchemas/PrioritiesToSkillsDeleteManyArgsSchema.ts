import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsWhereInputSchema'

export const PrioritiesToSkillsDeleteManyArgsSchema: z.ZodType<Prisma.PrioritiesToSkillsDeleteManyArgs> = z.object({
  where: PrioritiesToSkillsWhereInputSchema.optional(),
}).strict()

export default PrioritiesToSkillsDeleteManyArgsSchema;
