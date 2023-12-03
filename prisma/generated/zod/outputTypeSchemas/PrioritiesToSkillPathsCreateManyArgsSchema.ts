import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillPathsCreateManyInputSchema } from '../inputTypeSchemas/PrioritiesToSkillPathsCreateManyInputSchema'

export const PrioritiesToSkillPathsCreateManyArgsSchema: z.ZodType<Prisma.PrioritiesToSkillPathsCreateManyArgs> = z.object({
  data: z.union([ PrioritiesToSkillPathsCreateManyInputSchema,PrioritiesToSkillPathsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrioritiesToSkillPathsCreateManyArgsSchema;
