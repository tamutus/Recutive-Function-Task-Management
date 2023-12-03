import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillPathsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsWhereInputSchema'

export const PrioritiesToSkillPathsDeleteManyArgsSchema: z.ZodType<Prisma.PrioritiesToSkillPathsDeleteManyArgs> = z.object({
  where: PrioritiesToSkillPathsWhereInputSchema.optional(),
}).strict()

export default PrioritiesToSkillPathsDeleteManyArgsSchema;
