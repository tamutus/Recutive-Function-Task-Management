import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillCreateWithoutTaskTemplatesInputSchema } from './SkillCreateWithoutTaskTemplatesInputSchema';
import { SkillUncheckedCreateWithoutTaskTemplatesInputSchema } from './SkillUncheckedCreateWithoutTaskTemplatesInputSchema';

export const SkillCreateOrConnectWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.SkillCreateOrConnectWithoutTaskTemplatesInput> = z.object({
  where: z.lazy(() => SkillWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillCreateWithoutTaskTemplatesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutTaskTemplatesInputSchema) ]),
}).strict();

export default SkillCreateOrConnectWithoutTaskTemplatesInputSchema;
