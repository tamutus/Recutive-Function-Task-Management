import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { PrioritiesToTasksFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToTasksFindManyArgsSchema"
import { PrioritiesToProjectsFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToProjectsFindManyArgsSchema"
import { PrioritiesToSkillsFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToSkillsFindManyArgsSchema"
import { PrioritiesToSkillPathsFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToSkillPathsFindManyArgsSchema"
import { PrioritiesToTagsFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToTagsFindManyArgsSchema"
import { PrioritiesToPrivateTagsFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToPrivateTagsFindManyArgsSchema"
import { PriorityCountOutputTypeArgsSchema } from "../outputTypeSchemas/PriorityCountOutputTypeArgsSchema"

export const PriorityIncludeSchema: z.ZodType<Prisma.PriorityInclude> = z.object({
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  tasks: z.union([z.boolean(),z.lazy(() => PrioritiesToTasksFindManyArgsSchema)]).optional(),
  projects: z.union([z.boolean(),z.lazy(() => PrioritiesToProjectsFindManyArgsSchema)]).optional(),
  skills: z.union([z.boolean(),z.lazy(() => PrioritiesToSkillsFindManyArgsSchema)]).optional(),
  skillPaths: z.union([z.boolean(),z.lazy(() => PrioritiesToSkillPathsFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => PrioritiesToTagsFindManyArgsSchema)]).optional(),
  privateTags: z.union([z.boolean(),z.lazy(() => PrioritiesToPrivateTagsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PriorityCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PriorityIncludeSchema;
