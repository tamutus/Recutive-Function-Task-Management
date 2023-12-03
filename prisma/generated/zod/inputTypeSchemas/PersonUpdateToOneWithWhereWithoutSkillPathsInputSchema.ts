import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutSkillPathsInputSchema } from './PersonUpdateWithoutSkillPathsInputSchema';
import { PersonUncheckedUpdateWithoutSkillPathsInputSchema } from './PersonUncheckedUpdateWithoutSkillPathsInputSchema';

export const PersonUpdateToOneWithWhereWithoutSkillPathsInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutSkillPathsInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutSkillPathsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutSkillPathsInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutSkillPathsInputSchema;
