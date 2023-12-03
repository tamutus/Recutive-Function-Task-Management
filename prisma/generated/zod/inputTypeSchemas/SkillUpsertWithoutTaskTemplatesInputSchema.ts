import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillUpdateWithoutTaskTemplatesInputSchema } from './SkillUpdateWithoutTaskTemplatesInputSchema';
import { SkillUncheckedUpdateWithoutTaskTemplatesInputSchema } from './SkillUncheckedUpdateWithoutTaskTemplatesInputSchema';
import { SkillCreateWithoutTaskTemplatesInputSchema } from './SkillCreateWithoutTaskTemplatesInputSchema';
import { SkillUncheckedCreateWithoutTaskTemplatesInputSchema } from './SkillUncheckedCreateWithoutTaskTemplatesInputSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';

export const SkillUpsertWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.SkillUpsertWithoutTaskTemplatesInput> = z.object({
  update: z.union([ z.lazy(() => SkillUpdateWithoutTaskTemplatesInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutTaskTemplatesInputSchema) ]),
  create: z.union([ z.lazy(() => SkillCreateWithoutTaskTemplatesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutTaskTemplatesInputSchema) ]),
  where: z.lazy(() => SkillWhereInputSchema).optional()
}).strict();

export default SkillUpsertWithoutTaskTemplatesInputSchema;
