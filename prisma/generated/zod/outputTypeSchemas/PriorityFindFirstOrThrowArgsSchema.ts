import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PriorityIncludeSchema } from '../inputTypeSchemas/PriorityIncludeSchema'
import { PriorityWhereInputSchema } from '../inputTypeSchemas/PriorityWhereInputSchema'
import { PriorityOrderByWithRelationInputSchema } from '../inputTypeSchemas/PriorityOrderByWithRelationInputSchema'
import { PriorityWhereUniqueInputSchema } from '../inputTypeSchemas/PriorityWhereUniqueInputSchema'
import { PriorityScalarFieldEnumSchema } from '../inputTypeSchemas/PriorityScalarFieldEnumSchema'
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { PrioritiesToTasksFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToTasksFindManyArgsSchema"
import { PrioritiesToProjectsFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToProjectsFindManyArgsSchema"
import { PrioritiesToSkillsFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToSkillsFindManyArgsSchema"
import { PrioritiesToSkillPathsFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToSkillPathsFindManyArgsSchema"
import { PrioritiesToTagsFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToTagsFindManyArgsSchema"
import { PrioritiesToPrivateTagsFindManyArgsSchema } from "../outputTypeSchemas/PrioritiesToPrivateTagsFindManyArgsSchema"
import { PriorityCountOutputTypeArgsSchema } from "../outputTypeSchemas/PriorityCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrioritySelectSchema: z.ZodType<Prisma.PrioritySelect> = z.object({
  id: z.boolean().optional(),
  personId: z.boolean().optional(),
  info: z.boolean().optional(),
  color: z.boolean().optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  tasks: z.union([z.boolean(),z.lazy(() => PrioritiesToTasksFindManyArgsSchema)]).optional(),
  projects: z.union([z.boolean(),z.lazy(() => PrioritiesToProjectsFindManyArgsSchema)]).optional(),
  skills: z.union([z.boolean(),z.lazy(() => PrioritiesToSkillsFindManyArgsSchema)]).optional(),
  skillPaths: z.union([z.boolean(),z.lazy(() => PrioritiesToSkillPathsFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => PrioritiesToTagsFindManyArgsSchema)]).optional(),
  privateTags: z.union([z.boolean(),z.lazy(() => PrioritiesToPrivateTagsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PriorityCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PriorityFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PriorityFindFirstOrThrowArgs> = z.object({
  select: PrioritySelectSchema.optional(),
  include: PriorityIncludeSchema.optional(),
  where: PriorityWhereInputSchema.optional(),
  orderBy: z.union([ PriorityOrderByWithRelationInputSchema.array(),PriorityOrderByWithRelationInputSchema ]).optional(),
  cursor: PriorityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PriorityScalarFieldEnumSchema,PriorityScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PriorityFindFirstOrThrowArgsSchema;
