import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillLinkCreateWithoutPrecursorInputSchema } from './SkillLinkCreateWithoutPrecursorInputSchema';
import { SkillLinkUncheckedCreateWithoutPrecursorInputSchema } from './SkillLinkUncheckedCreateWithoutPrecursorInputSchema';
import { SkillLinkCreateOrConnectWithoutPrecursorInputSchema } from './SkillLinkCreateOrConnectWithoutPrecursorInputSchema';
import { SkillLinkCreateManyPrecursorInputEnvelopeSchema } from './SkillLinkCreateManyPrecursorInputEnvelopeSchema';
import { SkillLinkWhereUniqueInputSchema } from './SkillLinkWhereUniqueInputSchema';

export const SkillLinkUncheckedCreateNestedManyWithoutPrecursorInputSchema: z.ZodType<Prisma.SkillLinkUncheckedCreateNestedManyWithoutPrecursorInput> = z.object({
  create: z.union([ z.lazy(() => SkillLinkCreateWithoutPrecursorInputSchema),z.lazy(() => SkillLinkCreateWithoutPrecursorInputSchema).array(),z.lazy(() => SkillLinkUncheckedCreateWithoutPrecursorInputSchema),z.lazy(() => SkillLinkUncheckedCreateWithoutPrecursorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillLinkCreateOrConnectWithoutPrecursorInputSchema),z.lazy(() => SkillLinkCreateOrConnectWithoutPrecursorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillLinkCreateManyPrecursorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkillLinkWhereUniqueInputSchema),z.lazy(() => SkillLinkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SkillLinkUncheckedCreateNestedManyWithoutPrecursorInputSchema;
