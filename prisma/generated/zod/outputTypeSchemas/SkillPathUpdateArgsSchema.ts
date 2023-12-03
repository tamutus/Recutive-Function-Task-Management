import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillPathIncludeSchema } from '../inputTypeSchemas/SkillPathIncludeSchema'
import { SkillPathUpdateInputSchema } from '../inputTypeSchemas/SkillPathUpdateInputSchema'
import { SkillPathUncheckedUpdateInputSchema } from '../inputTypeSchemas/SkillPathUncheckedUpdateInputSchema'
import { SkillPathWhereUniqueInputSchema } from '../inputTypeSchemas/SkillPathWhereUniqueInputSchema'
import { SkillsToSkillPathsFindManyArgsSchema } from "../outputTypeSchemas/SkillsToSkillPathsFindManyArgsSchema"
import { PersonsToSkillPathsFindManyArgsSchema } from "../outputTypeSchemas/PersonsToSkillPathsFindManyArgsSchema"
import { SkillPathsToTagsFindManyArgsSchema } from "../outputTypeSchemas/SkillPathsToTagsFindManyArgsSchema"
import { PrioritiesToSkillPathsFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToSkillPathsFindManyArgsSchema"
import { SkillPathCountOutputTypeArgsSchema } from "../outputTypeSchemas/SkillPathCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SkillPathSelectSchema: z.ZodType<Prisma.SkillPathSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  info: z.boolean().optional(),
  skills: z.union([z.boolean(),z.lazy(() => SkillsToSkillPathsFindManyArgsSchema)]).optional(),
  students: z.union([z.boolean(),z.lazy(() => PersonsToSkillPathsFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => SkillPathsToTagsFindManyArgsSchema)]).optional(),
  priorities: z.union([z.boolean(),z.lazy(() => PrioritiesToSkillPathsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SkillPathCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SkillPathUpdateArgsSchema: z.ZodType<Prisma.SkillPathUpdateArgs> = z.object({
  select: SkillPathSelectSchema.optional(),
  include: SkillPathIncludeSchema.optional(),
  data: z.union([ SkillPathUpdateInputSchema,SkillPathUncheckedUpdateInputSchema ]),
  where: SkillPathWhereUniqueInputSchema,
}).strict()

export default SkillPathUpdateArgsSchema;
