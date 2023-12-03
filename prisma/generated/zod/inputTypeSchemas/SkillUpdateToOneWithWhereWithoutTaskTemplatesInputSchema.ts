import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';
import { SkillUpdateWithoutTaskTemplatesInputSchema } from './SkillUpdateWithoutTaskTemplatesInputSchema';
import { SkillUncheckedUpdateWithoutTaskTemplatesInputSchema } from './SkillUncheckedUpdateWithoutTaskTemplatesInputSchema';

export const SkillUpdateToOneWithWhereWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.SkillUpdateToOneWithWhereWithoutTaskTemplatesInput> = z.object({
  where: z.lazy(() => SkillWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SkillUpdateWithoutTaskTemplatesInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutTaskTemplatesInputSchema) ]),
}).strict();

export default SkillUpdateToOneWithWhereWithoutTaskTemplatesInputSchema;
