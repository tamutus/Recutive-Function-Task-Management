import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutSkillsInputSchema } from './PersonUpdateWithoutSkillsInputSchema';
import { PersonUncheckedUpdateWithoutSkillsInputSchema } from './PersonUncheckedUpdateWithoutSkillsInputSchema';

export const PersonUpdateToOneWithWhereWithoutSkillsInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutSkillsInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutSkillsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutSkillsInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutSkillsInputSchema;
