import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutSkillTagsInputSchema } from './PersonUpdateWithoutSkillTagsInputSchema';
import { PersonUncheckedUpdateWithoutSkillTagsInputSchema } from './PersonUncheckedUpdateWithoutSkillTagsInputSchema';

export const PersonUpdateToOneWithWhereWithoutSkillTagsInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutSkillTagsInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutSkillTagsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutSkillTagsInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutSkillTagsInputSchema;
