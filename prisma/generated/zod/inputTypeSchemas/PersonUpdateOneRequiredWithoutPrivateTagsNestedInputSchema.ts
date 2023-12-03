import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutPrivateTagsInputSchema } from './PersonCreateWithoutPrivateTagsInputSchema';
import { PersonUncheckedCreateWithoutPrivateTagsInputSchema } from './PersonUncheckedCreateWithoutPrivateTagsInputSchema';
import { PersonCreateOrConnectWithoutPrivateTagsInputSchema } from './PersonCreateOrConnectWithoutPrivateTagsInputSchema';
import { PersonUpsertWithoutPrivateTagsInputSchema } from './PersonUpsertWithoutPrivateTagsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutPrivateTagsInputSchema } from './PersonUpdateToOneWithWhereWithoutPrivateTagsInputSchema';
import { PersonUpdateWithoutPrivateTagsInputSchema } from './PersonUpdateWithoutPrivateTagsInputSchema';
import { PersonUncheckedUpdateWithoutPrivateTagsInputSchema } from './PersonUncheckedUpdateWithoutPrivateTagsInputSchema';

export const PersonUpdateOneRequiredWithoutPrivateTagsNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutPrivateTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutPrivateTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutPrivateTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutPrivateTagsInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutPrivateTagsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutPrivateTagsInputSchema),z.lazy(() => PersonUpdateWithoutPrivateTagsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutPrivateTagsInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutPrivateTagsNestedInputSchema;
