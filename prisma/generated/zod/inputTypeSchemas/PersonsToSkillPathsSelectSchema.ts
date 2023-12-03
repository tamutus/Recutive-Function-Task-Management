import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { SkillPathArgsSchema } from "../outputTypeSchemas/SkillPathArgsSchema"

export const PersonsToSkillPathsSelectSchema: z.ZodType<Prisma.PersonsToSkillPathsSelect> = z.object({
  personId: z.boolean().optional(),
  skillId: z.boolean().optional(),
  notes: z.boolean().optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  skillPath: z.union([z.boolean(),z.lazy(() => SkillPathArgsSchema)]).optional(),
}).strict()

export default PersonsToSkillPathsSelectSchema;
