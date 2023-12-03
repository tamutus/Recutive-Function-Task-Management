import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToSkillsCreateManyInputSchema } from '../inputTypeSchemas/PrioritiesToSkillsCreateManyInputSchema'

export const PrioritiesToSkillsCreateManyArgsSchema: z.ZodType<Prisma.PrioritiesToSkillsCreateManyArgs> = z.object({
  data: z.union([ PrioritiesToSkillsCreateManyInputSchema,PrioritiesToSkillsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrioritiesToSkillsCreateManyArgsSchema;
