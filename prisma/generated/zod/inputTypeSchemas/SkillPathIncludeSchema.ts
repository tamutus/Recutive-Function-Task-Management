import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToSkillPathsFindManyArgsSchema } from "../outputTypeSchemas/SkillsToSkillPathsFindManyArgsSchema"
import { PersonsToSkillPathsFindManyArgsSchema } from "../outputTypeSchemas/PersonsToSkillPathsFindManyArgsSchema"
import { SkillPathsToTagsFindManyArgsSchema } from "../outputTypeSchemas/SkillPathsToTagsFindManyArgsSchema"
import { PrioritiesToSkillPathsFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToSkillPathsFindManyArgsSchema"
import { SkillPathCountOutputTypeArgsSchema } from "../outputTypeSchemas/SkillPathCountOutputTypeArgsSchema"

export const SkillPathIncludeSchema: z.ZodType<Prisma.SkillPathInclude> = z.object({
  skills: z.union([z.boolean(),z.lazy(() => SkillsToSkillPathsFindManyArgsSchema)]).optional(),
  students: z.union([z.boolean(),z.lazy(() => PersonsToSkillPathsFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => SkillPathsToTagsFindManyArgsSchema)]).optional(),
  priorities: z.union([z.boolean(),z.lazy(() => PrioritiesToSkillPathsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SkillPathCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default SkillPathIncludeSchema;
