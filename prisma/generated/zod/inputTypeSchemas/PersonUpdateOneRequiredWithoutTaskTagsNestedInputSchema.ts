import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutTaskTagsInputSchema } from './PersonCreateWithoutTaskTagsInputSchema';
import { PersonUncheckedCreateWithoutTaskTagsInputSchema } from './PersonUncheckedCreateWithoutTaskTagsInputSchema';
import { PersonCreateOrConnectWithoutTaskTagsInputSchema } from './PersonCreateOrConnectWithoutTaskTagsInputSchema';
import { PersonUpsertWithoutTaskTagsInputSchema } from './PersonUpsertWithoutTaskTagsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutTaskTagsInputSchema } from './PersonUpdateToOneWithWhereWithoutTaskTagsInputSchema';
import { PersonUpdateWithoutTaskTagsInputSchema } from './PersonUpdateWithoutTaskTagsInputSchema';
import { PersonUncheckedUpdateWithoutTaskTagsInputSchema } from './PersonUncheckedUpdateWithoutTaskTagsInputSchema';

export const PersonUpdateOneRequiredWithoutTaskTagsNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutTaskTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutTaskTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutTaskTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutTaskTagsInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutTaskTagsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutTaskTagsInputSchema),z.lazy(() => PersonUpdateWithoutTaskTagsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutTaskTagsInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutTaskTagsNestedInputSchema;
